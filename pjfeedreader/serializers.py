from rest_framework import serializers

from .models import Category


class CategorySerializer(serializers.ModelSerializer):
    """
    Serialzing all the categories
    """

    class Meta:
        model = Category
        fields = ('name', 'slug')
