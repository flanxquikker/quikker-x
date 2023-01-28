function OnCreate() {
    root = app.createLayout();
    app.addChild(root);
    
    mainLay = widget.Layout("center", "center");
    mainLay.setWidth(1);
    mainLay.setHeight(1);
    mainLay.setBgColor("#242424");
    root.addChild(mainLay);
    
    logo = widget.Image();
    logo.getImage("main/asset/icon/fq.png");
    mainLay.addChild(logo);
}
