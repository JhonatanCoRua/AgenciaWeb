from django.urls import path

from .views import BlogListView, ListPostsByCategoryView, PostDetailView, SearchBlogView, AuthorBlogListView

urlpatterns = [
    path('list',BlogListView.as_view()),
    path('by_category',ListPostsByCategoryView.as_view()),
    path('detail/<slug>',PostDetailView.as_view()),
    path('search',SearchBlogView.as_view()),
    path('author_list/',AuthorBlogListView.as_view()),
]