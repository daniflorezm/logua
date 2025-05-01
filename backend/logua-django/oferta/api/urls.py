from rest_framework.routers import DefaultRouter
from oferta.api.views import OfertaLoguaView
from django.urls import path, include

oferta_router = DefaultRouter()
oferta_router.register(prefix="oferta", viewset=OfertaLoguaView)

urlpatterns = [
    path("", include(oferta_router.urls)),
]
