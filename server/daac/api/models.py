from django.db import models
from django.contrib.auth.models import User
import uuid

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    image = models.ImageField(upload_to='products_images/', blank=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=50)
    price = models.FloatField()

    def __str__(self):
        return f"Image: {self.image}\nProduct: {self.title}\nDescription: {self.description}\nCategory: {self.category}\nPrice: {self.price}"