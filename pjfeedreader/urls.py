from django.conf.urls import patterns, url, include

from rest_framework.routers import SimpleRouter
from .views import FeedViewSet, CategoryViewSet


router = SimpleRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'feeds', FeedViewSet)


urlpatterns = patterns(
    '',
    url(r'^api/v1/', include(router.urls)),
    )
