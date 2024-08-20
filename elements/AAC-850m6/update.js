function(instance, properties, context) {
    
    var link = document.createElement('a');
    link.setAttribute('href', properties.source);
    link.setAttribute('data-lightbox', properties.gallery_id);
    link.setAttribute('data-title', properties.caption);
    
    if(properties.source){
        var img = document.createElement('img');

        img.setAttribute('src', properties.source);
        img.style['object-fit'] = 'fill';
        img.setAttribute('width', '100%');
        img.setAttribute('height', '100%');
        
        if(properties.alt_tag){
            img.setAttribute('alt', properties.alt_tag);
        }
        
        link.append(img)
    }

    instance.canvas.empty();
    instance.canvas.append(link);
}