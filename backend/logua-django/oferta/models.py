from django.db import models


# Create your models here.
class OfertaLogua(models.Model):
    oferta = models.CharField(max_length=200)
    seccion = models.CharField(max_length=30)
    created_at = models.DateTimeField("fecha", auto_now_add=True)
    imagen_1 = models.ImageField(upload_to="ofertas", blank=True, null=True)
    imagen_2 = models.ImageField(upload_to="ofertas/", blank=True, null=True)
    precio = models.DecimalField(max_digits=9, decimal_places=2, blank=True, null=True)
    stock = models.PositiveIntegerField(blank=True, null=True)

    def __str__(self):
        return self.oferta
