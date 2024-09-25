from django.urls import path
from . import views, test

urlpatterns = [
    path('products/', views.getData, name='products'),
]
