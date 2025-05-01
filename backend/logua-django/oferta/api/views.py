from oferta.models import OfertaLogua
from .serializer import OfertaLoguaSerializer
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.


class OfertaLoguaView(viewsets.ModelViewSet):

    queryset = OfertaLogua.objects.all()
    serializer_class = OfertaLoguaSerializer
    permission_classes = []
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["oferta"]
