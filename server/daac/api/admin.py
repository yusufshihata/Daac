from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    fields = ['image', 'title', 'description', 'category', 'price']

admin.site.register(Product, ProductAdmin)