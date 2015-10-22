# 3rd party modules
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic import TemplateView

from rest_framework import viewsets

# Own
from .models import Category, Feed
from .serializers import CategorySerializer, FeedSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    """
    Category view, no need to define own list, create, etc. methods
    """

    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class FeedViewSet(viewsets.ModelViewSet):

    queryset = Feed.objects.all()
    serializer_class = FeedSerializer


class FeedIndexView(TemplateView):
    template_name = 'feed_index.html'

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
        return super(FeedIndexView, self).dispatch(*args, **kwargs)
