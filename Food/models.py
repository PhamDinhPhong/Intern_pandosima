from django.db import models

# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    image = models.ImageField(blank=True, null=True)
    date = models.DateField()

    def __str__(self):
        return str(self.name)

    @property
    def imageURL(self):
            try:
                url = self.image.url
            except:
                url = ''
            return url

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
    