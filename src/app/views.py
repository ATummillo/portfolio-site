import os
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseServerError, JsonResponse
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


def index(request):
    return render(request, "index.html")


def send_email(request):
    if request.method == "POST":
        message = Mail(
            from_email="atummillo.dev@gmail.com",
            to_emails="atummillo.dev@gmail.com",
            subject="New email from Portfolio Site!",
            html_content="Name: {name}<br/>Email: {email}<br/>Message: {message}".format(
                name=request.POST.get("name"),
                email=request.POST.get("email"),
                message=request.POST.get("message"),
            ),
        )

        try:
            sg = SendGridAPIClient(os.environ.get("SENDGRID_API_KEY"))
            response = sg.send(message)
        except Exception as e:
            if hasattr(e, "message"):
                print(e.message)
            else:
                print(e)
            return HttpResponseServerError()

    return JsonResponse({"status": "Success"})
