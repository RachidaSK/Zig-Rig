curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"Test template","voltage":120,"current":20}' \
  http://localhost:3001/api/template
