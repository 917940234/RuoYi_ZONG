package com.ruoyi.product.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.product.mapper.ProductBlastFurnaceWeightMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceWeight;
import com.ruoyi.product.service.IProductBlastFurnaceWeightService;
import com.ruoyi.common.core.text.Convert;

/**
 * 出铁重量计量Service业务层处理
 * 
 * @author zongyoucheng
 * @date 2022-11-26
 */
@Service
public class ProductBlastFurnaceWeightServiceImpl implements IProductBlastFurnaceWeightService 
{
    @Autowired
    private ProductBlastFurnaceWeightMapper productBlastFurnaceWeightMapper;

    /**
     * 查询出铁重量计量
     * 
     * @param blastFurnaceWeightId 出铁重量计量主键
     * @return 出铁重量计量
     */
    @Override
    public ProductBlastFurnaceWeight selectProductBlastFurnaceWeightByBlastFurnaceWeightId(Long blastFurnaceWeightId)
    {
        return productBlastFurnaceWeightMapper.selectProductBlastFurnaceWeightByBlastFurnaceWeightId(blastFurnaceWeightId);
    }

    /**
     * 查询出铁重量计量列表
     * 
     * @param productBlastFurnaceWeight 出铁重量计量
     * @return 出铁重量计量
     */
    @Override
    public List<ProductBlastFurnaceWeight> selectProductBlastFurnaceWeightList(ProductBlastFurnaceWeight productBlastFurnaceWeight)
    {
        return productBlastFurnaceWeightMapper.selectProductBlastFurnaceWeightList(productBlastFurnaceWeight);
    }

    /**
     * 新增出铁重量计量
     * 
     * @param productBlastFurnaceWeight 出铁重量计量
     * @return 结果
     */
    @Override
    public int insertProductBlastFurnaceWeight(ProductBlastFurnaceWeight productBlastFurnaceWeight)
    {
        return productBlastFurnaceWeightMapper.insertProductBlastFurnaceWeight(productBlastFurnaceWeight);
    }

    /**
     * 修改出铁重量计量
     * 
     * @param productBlastFurnaceWeight 出铁重量计量
     * @return 结果
     */
    @Override
    public int updateProductBlastFurnaceWeight(ProductBlastFurnaceWeight productBlastFurnaceWeight)
    {
        return productBlastFurnaceWeightMapper.updateProductBlastFurnaceWeight(productBlastFurnaceWeight);
    }

    /**
     * 批量删除出铁重量计量
     * 
     * @param blastFurnaceWeightIds 需要删除的出铁重量计量主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceWeightByBlastFurnaceWeightIds(String blastFurnaceWeightIds)
    {
        return productBlastFurnaceWeightMapper.deleteProductBlastFurnaceWeightByBlastFurnaceWeightIds(Convert.toStrArray(blastFurnaceWeightIds));
    }

    /**
     * 删除出铁重量计量信息
     * 
     * @param blastFurnaceWeightId 出铁重量计量主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceWeightByBlastFurnaceWeightId(Long blastFurnaceWeightId)
    {
        return productBlastFurnaceWeightMapper.deleteProductBlastFurnaceWeightByBlastFurnaceWeightId(blastFurnaceWeightId);
    }
}
