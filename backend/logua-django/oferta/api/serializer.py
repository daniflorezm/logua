from oferta.models import OfertaLogua
from rest_framework import serializers


class OfertaLoguaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OfertaLogua
        fields = "__all__"
