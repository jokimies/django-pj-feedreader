from rest_framework import serializers

from .models import Category, Feed


class CategorySerializer(serializers.ModelSerializer):
    """
    Serialzing all the categories
    """

    class Meta:
        model = Category
        fields = ('id', 'name', 'slug')


class FeedSerializer(serializers.ModelSerializer):
    """
    Serializing all the Feeds
    """
    category = CategorySerializer(read_only=True, required=False)

    class Meta:
        model = Feed
        fields = ('id', 'title', 'url', 'category', 'date_checked',
                  'date_updated')
