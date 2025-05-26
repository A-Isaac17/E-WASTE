from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('requests_app.urls')), # Main API route
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')), # For DRF login/logout
]