from django.contrib import admin
from .models import CollectionRequest

@admin.register(CollectionRequest)
class CollectionRequestAdmin(admin.ModelAdmin):
    list_display = ('id', 'item_name', 'user_link', 'status', 'request_date', 'action_taken')
    list_filter = ('status', 'action_taken', 'request_date')
    search_fields = ('item_name', 'user__username')
    readonly_fields = ('request_date',)

    def user_link(self, obj):
        # ... (implementation from previous answer) ...
        pass
    user_link.short_description = 'User'
    # ... (fieldsets, etc.) ...