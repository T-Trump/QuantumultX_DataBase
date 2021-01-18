if ($response.statusCode != 200) {
  $done(null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['query'];
var ip = obj['query'];
var description = '地址:'+ obj['query']+ '\n'+'国家:' +(obj['country'])+ '\n' +'城市:' +(obj['city'])+ '\n' +'服务商:' +obj['isp'];
$done({title, subtitle, ip, description});
