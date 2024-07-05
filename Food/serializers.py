from rest_framework import serializers
from .models import Food

class FoodModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        # fields = ('id', 'name', 'price', 'description', 'image', 'date')
        fields = '__all__'