from django.shortcuts import render
from rest_framework import viewsets
from .models import Food
from .serializers import FoodModelSerializer
# Create your views here.
class FoodViewSet(viewsets.ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodModelSerializer