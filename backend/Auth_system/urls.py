
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Auth system API",
        default_version='v1',
        description="This is a django React application that authenticates users and clicks if the are registered on the platform ",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="users@me.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^docs/$', schema_view.with_ui('swagger',
            cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc',
            cache_timeout=0), name='schema-redoc'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('admin/', admin.site.urls),
]


urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]
