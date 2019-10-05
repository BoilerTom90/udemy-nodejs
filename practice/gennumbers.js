/* (id, number, country_id, user_id, enabled, route_configured, type) */
for (var i = 1, n = 8471112222; i < 2000; i++ , n++) {
   var enabled = i % 2;
   var route_configured = enabled;
   var type = i % 2 ? 1 : 2;
   var country = i % 223 + 1;
   var str = "(" + i + ", " + n + ", " + country + ", 1, " + enabled + ", " + route_configured + ", " + type + "),";
   console.log(str);
}