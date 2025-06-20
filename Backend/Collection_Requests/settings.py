# Collection_Requests/Collection_Requests/settings.py

import os
from pathlib import Path
from dotenv import load_dotenv
from django.core.management.utils import get_random_secret_key

load_dotenv()
ROOT_URLCONF = 'Collection_Requests.urls'
BASE_DIR = Path(__file__).resolve().parent.parent

# Load environment variables from .env file
load_dotenv(os.path.join(BASE_DIR, '.env'))

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')
DEBUG = os.environ.get('DJANGO_DEBUG', 'True') == 'True'
ALLOWED_HOSTS = os.environ.get('DJANGO_ALLOWED_HOSTS', 'localhost,127.0.0.1').split(',')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get('DB_NAME'),
        'USER': os.environ.get('DB_USER'),
        'PASSWORD': os.environ.get('DB_PASSWORD'),
        'HOST': os.environ.get('DB_HOST'),
        'PORT': os.environ.get('DB_PORT'),
    }
}

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

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'COLLECTION_REQUESTS',
        'USER': 'root',
        'PASSWORD': '@2wafY17',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', get_random_secret_key())

