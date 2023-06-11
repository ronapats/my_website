---
categories:
- ""
- ""
date: "2017-10-31T22:42:51-05:00"
draft: false
image: mimapa.jpeg
keywords: ""
slug: map_website
title: My map
---


```r
library(tidyverse)
```

```
## ── Attaching core tidyverse packages ──────────────────────── tidyverse 2.0.0 ──
## ✔ dplyr     1.1.2     ✔ readr     2.1.4
## ✔ forcats   1.0.0     ✔ stringr   1.5.0
## ✔ ggplot2   3.4.2     ✔ tibble    3.2.1
## ✔ lubridate 1.9.2     ✔ tidyr     1.3.0
## ✔ purrr     1.0.1     
## ── Conflicts ────────────────────────────────────────── tidyverse_conflicts() ──
## ✖ dplyr::filter() masks stats::filter()
## ✖ dplyr::lag()    masks stats::lag()
## ℹ Use the conflicted package (<http://conflicted.r-lib.org/>) to force all conflicts to become errors
```

```r
library(sf)
```

```
## Linking to GEOS 3.11.2, GDAL 3.6.2, PROJ 9.2.0; sf_use_s2() is TRUE
```

```r
library(rnaturalearth)
library(countrycode)
library(ggrepel)
library(ggplot2)
library(tmap)
```



```r
#Inputs for maps in tmap
my_map_col<-read_csv(here::here("data","paises_col.csv"))
```

```
## Rows: 17 Columns: 15
## ── Column specification ────────────────────────────────────────────────────────
## Delimiter: ","
## chr (15): Country, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 202...
## 
## ℹ Use `spec()` to retrieve the full column specification for this data.
## ℹ Specify the column types or set `show_col_types = FALSE` to quiet this message.
```

```r
world_shapefile <- ne_download(scale = "large", type = "countries", category = "cultural", returnclass = "sf") %>% filter(ADMIN!="Antarctica") %>%  
  st_transform(crs="+proj=robin")

world_shapefile_new<-world_shapefile %>%
  select(geometry,NAME,ISO_A3,ISO_A3_EH,ADMIN) %>% 
  left_join(my_map_col,by=c("ISO_A3_EH"="Country")) %>% 
  pivot_longer(cols=6:19,names_to="year",values_to="visited")%>% 
  mutate(visited = if_else(is.na(visited), "grey", visited)) 
```
Here is a view of all the countries I have visited in my life.


```r
tmap_mode("plot")
```

```
## tmap mode set to plotting
```

```r
tmap_options(check.and.fix = TRUE)
world_shapefile_new %>% 
  filter(year=="all")%>% 
  tm_shape()+
  tm_borders()+
  tm_fill(col="visited")
```

```
## Warning: The shape . is invalid. See sf::st_is_valid
```

<img src="/blogs/map_website_files/figure-html/unnamed-chunk-3-1.png" width="672" />
