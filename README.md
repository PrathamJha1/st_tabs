# st_tabs

Streamlit component that allows you to do change the tabbar as per your need
This component has implement Material UI tabbar component in order to create simple yet good looking tab with the functionality to change its background color,textcolor,hoverstate color,font-size and font-weight respectively.
## Installation instructions

```sh
pip install st_tabs
```

## Usage instructions

```python
import streamlit as st

from st_tabs import TabBar

component1=  TabBar(tabs=["Tab1","Tab2"],default=0,background = "red",color="grey",activeColor="blue",fontSize="20px")
#Handle your tabbar usecases here.
if(component1 == 0):
    st.write("Hooray! we are in Tab1")
else:
    st.write("Yippee! We are in Tab2 ")
```