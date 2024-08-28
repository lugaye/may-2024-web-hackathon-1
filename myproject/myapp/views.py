from django.shortcuts import render
from .models import Portfolio

# Create your views here.

def index (request):
    if request.method == 'POST':
        enter_name = request.POST['full_name']
        enter_email = request.POST['email']
        enter_message = request.POST['message']
        
        porfolio = Portfolio(name=enter_name, email=enter_email, message=enter_message)
        porfolio.save() 
            
    return render(request, 'myapp/index.html') 