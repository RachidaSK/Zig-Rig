curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"Test template","phase":"L1","current":20,"type":"single"}' \
  http://localhost:3001/api/template
