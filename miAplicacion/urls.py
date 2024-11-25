from . import views
from django.urls import path

urlpatterns = [
    path("", views.BienvenidaProductos, name="BienvenidaProductos"),
]
