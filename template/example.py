import streamlit as st
from st_tabs import TabBar
component1=  TabBar(tabs=["Tab1","Tab2"],default=0,background = "black",color="grey",activeColor="blue",fontSize="20px")
#Handle your tabbar usecases here.
if(component1 == 0):
    st.write("Hooray! we are in Tab1")
else:
    st.write("Yippee! We are in Tab2 ")