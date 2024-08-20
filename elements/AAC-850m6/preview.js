function(instance, properties) {
    var div = document.createElement('div');
    
    div.setAttribute('width', properties.bubble.width());
    div.setAttribute('height', properties.bubble.height());
    
    
    if(properties.source){
    	var img = document.createElement('img');
        
    	img.setAttribute('src', properties.source);
    	img.style['object-fit'] = 'fill';
        img.setAttribute('width', '100%');
        img.setAttribute('height', '100%');
        div.append(img)
    }

	instance.canvas.empty();    
    instance.canvas.append(div);

}