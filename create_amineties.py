#!/usr/bin/python3
from models import storage
from models.base_model import BaseModel
from models.amenity import Amenity

amts =['WiFi', 'Parking', 'Kitchen', 'Netflix', 'Pool', 'Heating']
for am in amts:
    amt = Amenity()
    amt.name = am
    storage.new(amt)
    storage.save()
    print(amt.id + ' added')
