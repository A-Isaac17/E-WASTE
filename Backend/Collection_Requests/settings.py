# Collection_Requests/Collection_Requests/settings.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',        # Add Django REST Framework
    'corsheaders',           # Add CORS headers
    'requests_app',          # Add your new app
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', # Add CORS middleware (place it high)
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CORS Configuration (allow all for development, restrict in production)
CORS_ALLOW_ALL_ORIGINS = True # For development
# Or, for more control:
# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:3000", # Assuming your frontend runs on port 3000
#     "http://127.0.0.1:3000",
# ]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication', # For browsable API and web clients
        # 'rest_framework.authentication.TokenAuthentication', # For token-based auth (optional)
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated', # Require authentication by default
    ]
}