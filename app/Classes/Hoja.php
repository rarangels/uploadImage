<?php

namespace App\Classes;

/**
 * Class Hoja
 *
 * @package App\Classes
 */
abstract class Hoja
{
    /**
     * @var
     */
    public $maxWidth;

    /**
     * @var
     */
    public $maxHeight;

    /**
     * @var string
     */
    public $orientacion = 'Vertical';

    public $img;

    public function __construct($img)
    {
        $this->img = $img;
    }

    /**
     * @return mixed
     */
    public function getWidth()
    {
        if ($this->orientacion == 'Vertical') {
            return $this->maxWidth;
        }

        return $this->maxHeight;
    }

    /**
     * @return mixed
     */
    public function getHeight()
    {
        if ($this->orientacion == 'Vertical') {
            return $this->maxHeight;
        }

        return $this->maxWidth;
    }

    /**
     * @param $img
     */
    public function setOrientacionByImg()
    {
        $this->orientacion = $this->verificarOrientacion();
    }

    /**
     * @param $img
     * @return string
     */
    public function verificarOrientacion()
    {
        return $this->img->getWidth() > $this->img->getHeight() ? 'Horizontal' : 'Vertical';
    }

    /**
     * @param $img
     * @return mixed
     */
    public function getImagenAjustada()
    {
        $this->setOrientacionByImg();

        return (clone $this->img)->resize($this->getWidth(), $this->getHeight(), function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
    }
}
