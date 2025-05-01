from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from oferta.api.urls import oferta_router

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(oferta_router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
