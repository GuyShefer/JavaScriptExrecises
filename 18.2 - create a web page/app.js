(function () {

    const header = document.createElement('header');
    header.style.height = '20vh';
    header.style.border = '1px solid';
    header.style.fontSize = '28px';
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.background = 'lightblue';
    header.style.marginBottom = '10px';
    const headerContent = document.createTextNode("Header");
    header.appendChild(headerContent);
    document.body.appendChild(header);

    const container = document.createElement('container');
    container.style.height = '65vh';
    container.style.display = 'flex';
    document.body.appendChild(container);

    const main = document.createElement('main');
    main.style.height = '100%';
    main.style.border = '1px solid';
    main.style.width = '70%';
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
    main.style.alignItems = 'center';
    main.style.fontSize = '28px';
    main.style.background = '#f3f3f3';
    const mainContent = document.createTextNode("Main");
    main.appendChild(mainContent);
    container.appendChild(main)

    const aside = document.createElement('aside');
    aside.style.height = '100%';
    aside.style.width = '30%'
    aside.style.marginLeft = '10px'
    aside.style.display = 'flex';
    aside.style.justifyContent = 'center';
    aside.style.alignItems = 'center';
    aside.style.fontSize = '28px';
    aside.style.background = '#f3f3f3';
    aside.style.border = '1px solid';
    const asideContent = document.createTextNode("Aside");
    aside.appendChild(asideContent);
    container.appendChild(aside);

    const footer = document.createElement('footer');
    footer.style.height = '15vh';
    footer.style.border = '1px solid';
    footer.style.fontSize = '28px';
    footer.style.display = 'flex';
    footer.style.justifyContent = 'center';
    footer.style.alignItems = 'center';
    footer.style.background = 'lightblue';
    footer.style.marginTop = '10px';
    const footerContent = document.createTextNode("Footer");
    footer.appendChild(footerContent);
    document.body.appendChild(footer);
    
})();
