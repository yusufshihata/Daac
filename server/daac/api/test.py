from django.core.mail import EmailMessage
from django.shortcuts import render, HttpResponse
from . import views

def send_test_email(request):
    views.request_products({'name': "Ahmed Mohamed", 'phone_number':"0100230344", 'requests':['oxival'],})
    return HttpResponse("Email Sent Successfully!")