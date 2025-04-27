from dotenv import load_dotenv
from twilio.rest import Client
import pandas
import os

load_dotenv()

account_sid = os.getenv('TWILIO_ACCOUNT_SID')
auth_token = os.getenv('TWILIO_AUTH_TOKEN')

client = Client(account_sid, auth_token)

call = client.calls.create(
    twiml='<Response><Say>Hello! This is a test call from Twilio and Python. Have a nice day!</Say></Response>',
    to='+16507699012',
    from_='+18665760067'
)

print(f"Started call with SID: {call.sid}")