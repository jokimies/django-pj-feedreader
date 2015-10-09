from rest_framework import serializers

from .models import Category, Feed


class CategorySerializer(serializers.ModelSerializer):
    """
    Serialzing all the categories
    """

    class Meta:
        model = Category
        fields = ('name', 'slug')


class FeedSerializer(serializers.ModelSerializer):
    """
    Serializing all the Feeds
    """

    class Meta:
        model = Feed
        fields = ('title', 'feed_url', 'id')
