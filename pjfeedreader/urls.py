from django.conf.urls import url, include

from rest_framework.routers import SimpleRouter
from .views import FeedViewSet, CategoryViewSet, FeedIndexView

router = SimpleRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'feeds', FeedViewSet)


urlpatterns = [
    url(r'^api/v1/', include(router.urls)),
    #url(r'^$', FeedIndexView.as_view(), name='feed-index'),
    url(r'^.*', FeedIndexView.as_view(), name='feed-index'),
]
