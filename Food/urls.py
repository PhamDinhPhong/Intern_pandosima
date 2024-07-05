from rest_framework import routers
from .views import FoodViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'Food', FoodViewSet)

urlpatterns = [
    path('', include(router.urls))
]
