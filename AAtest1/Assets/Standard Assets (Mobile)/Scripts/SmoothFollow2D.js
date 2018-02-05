
#pragma strict

var target : Transform;
var smoothTime = 0.3;
private var thisTransform : Transform;
private var camDefaultPos : Vector3;
private var velocity : Vector2;

function Start()
{
	thisTransform = transform;
	camDefaultPos = transform.position;
}

function Update() 
{
	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, 
		target.position.x, velocity.x, smoothTime);
	thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, 
		camDefaultPos.y, velocity.y, smoothTime);
}