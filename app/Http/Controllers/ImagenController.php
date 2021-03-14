<?php

namespace App\Http\Controllers;

use App\Classes\A4;
use App\Http\Requests\ImageRequest;
use Intervention\Image\Facades\Image;

/**
 * Class ImagenController
 *
 * @package App\Http\Controllers
 */
class ImagenController extends Controller
{
    /**
     * @param \App\Http\Requests\ImageRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function upload(ImageRequest $request)
    {
        $img = Image::make($request->file);

        $hoja = new A4($img);
        $img_ajustada = $hoja->getImagenAjustada();

        return response()->json([
            'success' => 'Se ha analizado correctamente la imagen',
            'inicial' => [
                'width' => $img->getWidth(),
                'height' => $img->getHeight(),
            ],
            'final' => [
                'width' => $img_ajustada->getWidth(),
                'height' => $img_ajustada->getHeight(),
            ],
            'hoja' => [
                'width' => $hoja->getWidth(),
                'height' => $hoja->getHeight(),
                'orientacion' => $hoja->orientacion,
            ],
        ]);
    }
}
