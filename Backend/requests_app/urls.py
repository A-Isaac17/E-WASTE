# Collection_Requests/requests_app/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CollectionRequestViewSet

router = DefaultRouter()
router.register(r'collection-requests', CollectionRequestViewSet, basename='collectionrequest')

urlpatterns = [
    path('', include(router.urls)),
]