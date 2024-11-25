from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


# Create your views here.


def Productos(request):
    return HttpResponse("<h1>Nuestra Primera vistan completado!<h1>")


def BienvenidaProductos(request):
    template = loader.get_template("index.html")
    return HttpResponse(template.render())
