exports.menu = {
  "contents":[
    { "type": "paragraph", "text": "ninja-daylight-x Settings"},
    { "type": "input_field_text", "field_name": "latitude", "value": "", "label": "Latitude", "required": true},
    { "type": "input_field_text", "field_name": "longitude", "value": "", "label": "Longitude", "required": true},
    { "type": "submit", "name": "Save", "rpc_method": "echo" },
  ]
};

exports.echo = {
  "contents":[
    { "type": "paragraph", "text": "Settings has been saved"}
  ]
};
