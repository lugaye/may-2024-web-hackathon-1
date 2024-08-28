from django.db import models


# Create your models here.
class Portfolio(models.Model):
    name = models.CharField(max_length=20, null=False, blank=False)
    email = models.EmailField(max_length=254, null=False, blank=False)
    message = models.TextField(null=False, blank=False)
   
   
    def __str__(self):
        return self.name 
    