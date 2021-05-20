hash=$(git hash-object resources/current_alert.js)
rm resources/current_alert.*.js
cp resources/current_alert.js "resources/current_alert.$hash.js"
sed -Ei'.backup' 's/current_alert.*js/current_alert.'"$hash"'.js/g' *.html
sed -Ei'.backup' 's/current_alert.*js/current_alert.'"$hash"'.js/g' campaigns/*.html
rm *.backup
rm campaigns/*.backup