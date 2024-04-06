<?php

namespace SimonPioli\Http\Controllers\Api;

use SimonPioli\Http\Controllers\Controller;
use SimonPioli\Http\Requests\SendMessageRequest;

class ContactController extends Controller
{
    public function sendMessage(SendMessageRequest $request)
    {
        $validatedMessage = $request->validated();


    }
}
