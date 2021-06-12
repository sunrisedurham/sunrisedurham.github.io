currentAlertHash=$(git hash-object resources/current_alert.js)
navbarHash=$(git hash-object resources/navbar.js)

rm resources/current_alert.*.js
cp resources/current_alert.js "resources/current_alert.$currentAlertHash.js"
sed -Ei'.backup' 's/current_alert.*js/current_alert.'"$currentAlertHash"'.js/g' *.html
sed -Ei'.backup' 's/current_alert.*js/current_alert.'"$currentAlertHash"'.js/g' campaigns/*.html

rm resources/navbar.*.js
cp resources/navbar.js "resources/navbar.$navbarHash.js"
sed -Ei'.backup' 's/navbar.*js/navbar.'"$navbarHash"'.js/g' *.html
sed -Ei'.backup' 's/navbar.*js/navbar.'"$navbarHash"'.js/g' campaigns/*.html

rm *.backup
rm campaigns/*.backup