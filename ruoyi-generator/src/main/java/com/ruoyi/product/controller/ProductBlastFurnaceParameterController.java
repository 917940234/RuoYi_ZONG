package com.ruoyi.product.controller;

import java.util.List;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.product.domain.ProductBlastFurnaceParameter;
import com.ruoyi.product.service.IProductBlastFurnaceParameterService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 参数设置Controller
 * 
 * @author zongyoucheng
 * @date 2022-10-19
 */
@Controller
@RequestMapping("/product/blastfurnaceparameter")
public class ProductBlastFurnaceParameterController extends BaseController
{
    private String prefix = "product/blastfurnaceparameter";

    @Autowired
    private IProductBlastFurnaceParameterService productBlastFurnaceParameterService;

    @RequiresPermissions("product:blastfurnaceparameter:view")
    @GetMapping()
    public String blastfurnaceparameter()
    {
        return prefix + "/blastfurnaceparameter";
    }

    /**
     * 查询参数设置列表
     */
    @RequiresPermissions("product:blastfurnaceparameter:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(ProductBlastFurnaceParameter productBlastFurnaceParameter)
    {
        startPage();
        List<ProductBlastFurnaceParameter> list = productBlastFurnaceParameterService.selectProductBlastFurnaceParameterList(productBlastFurnaceParameter);
        return getDataTable(list);
    }

    /**
     * 导出参数设置列表
     */
    @RequiresPermissions("product:blastfurnaceparameter:export")
    @Log(title = "参数设置", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(ProductBlastFurnaceParameter productBlastFurnaceParameter)
    {
        List<ProductBlastFurnaceParameter> list = productBlastFurnaceParameterService.selectProductBlastFurnaceParameterList(productBlastFurnaceParameter);
        ExcelUtil<ProductBlastFurnaceParameter> util = new ExcelUtil<ProductBlastFurnaceParameter>(ProductBlastFurnaceParameter.class);
        return util.exportExcel(list, "参数设置数据");
    }

    /**
     * 新增参数设置
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存参数设置
     */
    @RequiresPermissions("product:blastfurnaceparameter:add")
    @Log(title = "参数设置", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(ProductBlastFurnaceParameter productBlastFurnaceParameter)
    {
        return toAjax(productBlastFurnaceParameterService.insertProductBlastFurnaceParameter(productBlastFurnaceParameter));
    }

    /**
     * 修改参数设置
     */
    @RequiresPermissions("product:blastfurnaceparameter:edit")
    @GetMapping("/edit/{tankAgeCoefficient}")
    public String edit(@PathVariable("tankAgeCoefficient") Long tankAgeCoefficient, ModelMap mmap)
    {
        ProductBlastFurnaceParameter productBlastFurnaceParameter = productBlastFurnaceParameterService.selectProductBlastFurnaceParameterByTankAgeCoefficient(tankAgeCoefficient);
        mmap.put("productBlastFurnaceParameter", productBlastFurnaceParameter);
        return prefix + "/edit";
    }

    /**
     * 修改保存参数设置
     */
    @RequiresPermissions("product:blastfurnaceparameter:edit")
    @Log(title = "参数设置", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(ProductBlastFurnaceParameter productBlastFurnaceParameter)
    {
        return toAjax(productBlastFurnaceParameterService.updateProductBlastFurnaceParameter(productBlastFurnaceParameter));
    }

    /**
     * 删除参数设置
     */
    @RequiresPermissions("product:blastfurnaceparameter:remove")
    @Log(title = "参数设置", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(productBlastFurnaceParameterService.deleteProductBlastFurnaceParameterByTankAgeCoefficients(ids));
    }
}
